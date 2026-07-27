import { getCollection, type CollectionEntry } from "astro:content";

type ProjectEntry = CollectionEntry<"projects">;
export type Project = ProjectEntry["data"] & { slug: string; description: string };

function slugFromEntry(entry: ProjectEntry): string {
  return entry.id.replace(/\.(md|mdx)$/, "");
}

function descriptionFromEntry(entry: ProjectEntry): string {
  return (entry.body ?? "").trim().replace(/\s+/g, " ");
}

function byOrderThenTitle(a: Project, b: Project): number {
  return a.order - b.order || a.title.localeCompare(b.title);
}

export async function getProjects(): Promise<Project[]> {
  const entries = await getCollection("projects");
  return entries
    .map((entry: ProjectEntry) => ({
      slug: slugFromEntry(entry),
      description: descriptionFromEntry(entry),
      ...entry.data,
    }))
    .sort(byOrderThenTitle);
}

export async function getProject(slug: string): Promise<Project | undefined> {
  const projects = await getProjects();
  return projects.find((project) => project.slug === slug);
}

export function getRelated(projects: Project[], slug: string, limit = 3): Project[] {
  const current = projects.find((project) => project.slug === slug);
  if (!current) return projects.slice(0, limit);

  return projects
    .filter((project) => project.slug !== slug)
    .sort((a, b) => {
      const aScore = a.category === current.category ? -1 : 1;
      const bScore = b.category === current.category ? -1 : 1;
      return aScore - bScore || byOrderThenTitle(a, b);
    })
    .slice(0, limit);
}

export function getProjectFilters(projects: Project[]): {
  categories: string[];
  technologies: string[];
} {
  return {
    categories: [...new Set(projects.map((project) => project.category))],
    technologies: [...new Set(projects.flatMap((project) => project.technology))],
  };
}

export function projectForJson(project: Project) {
  return {
    slug: project.slug,
    title: project.title,
    category: project.category,
    technology: project.technology,
    shortDescription: project.shortDescription,
    summary: project.summary,
    focus: project.focus,
    description: project.description,
  };
}
