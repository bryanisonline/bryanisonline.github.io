---
# Leave the homepage title empty to use the site title
title: ""
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: "6rem"

sections:
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: ""
      # Show a call-to-action button under your biography? (optional)
      button:
        text: Download CV
        url: uploads/bryan-kettle-cv.pdf
    design:
      css_class: dark
      background:
        color: black
        image:
          # Add your image background to `assets/media/`.
          filename: newfoundland.jpg
          filters:
            brightness: 0.3
          size: cover
          position: center
          parallax: false
  - block: markdown
    id: research
    content:
      title: 'Academic Research'
      subtitle: ''
      text: |-
        My academic research primarily focused on studying certain kinds of Hopf algebras known as *quantum groups*. The value of these types of objects are often realized in terms of their representations, where they can yield non-trivial solutions to the Yang-Baxter equation - an important consistency equation for quantum integrable systems in statistical mechanics.
       
        The family of quantum groups I mainly studied are known as *Yangians*, usually denoted {{< math >}}$\operatorname{Y}(\mathfrak{g})${{< /math >}} for a suitable Lie algebra or Lie superalgebra {{< math >}}$\mathfrak{g}${{< /math >}}. In September of 2023, I successfully defended my PhD dissertation, titled *Orthosymplectic, Periplectic, and Twisted Super Yangians*, wherein several algebraic and representation theoretic results are proven about Yangians based on certain Lie superalgebras.
      
    design:
      columns: '1'
  - block: collection
    id: papers
    content:
      title: Featured Publications
      filters:
        folders:
          - publication
        featured_only: true
    design:
      view: article-grid
      columns: 2
  - block: collection
    content:
      title: Recent Publications
      text: ""
      filters:
        folders:
          - publication
        exclude_featured: false
    design:
      view: citation
  - block: collection
    id: talks
    content:
      title: Recent & Upcoming Talks
      filters:
        folders:
          - event
    design:
      view: article-grid
      columns: 1
---
