---
# Leave the homepage title empty to use the site title
title:
date: 2023-08-02
type: landing

sections:
  - block: about.biography
    id: about
    content:
      title: Biography
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
  - block: markdown
    id: research
    content:
      title: Research Overview
      text: |-
       Academically, I am an algebraist primarily focused on studying certain kinds of Hopf algebras known as *quantum groups*. The value of these types of objects are often realized in terms of their representations, where they yield non-trivial solutions to important consistency equations found in quantum physics and statistical mechanics.
       
       The family of quantum groups I primarily study are Yangians, usually denoted {{< math >}}$\operatorname{Y}(\mathfrak{g})${{< /math >}} for a suitable Lie algebra or Lie superalgebra {{< math >}}$\mathfrak{g}${{< /math >}}. At least when {{< math >}}$\mathfrak{g}${{< /math >}} is a finite-dimensional complex simple Lie algebra, it is known that the finite-dimensional irreducible representations of {{< math >}}$\operatorname{Y}(\mathfrak{g})${{< /math >}} yield rational solutions to the Yang-Baxter equation:

       {{< math >}}
       $$R_{12}(u) R_{13}(u+v) R_{23}(v) = R_{23}(v) R_{13}(u+v) R_{12}(u).$$
       {{< /math >}}

       In September of 2023, I successfully defended my PhD dissertation, titled *Orthosymplectic, Periplectic, and Twisted Super Yangians*, wherein several algebraic and representation theoretic results are proven about Yangians based on certain Lie superalgebras. One can access my PhD dissertation via the link available below.

    design:
      columns: '2'

#  - block: collection
#    id: featured
#    content:
#      title: Featured Publications
#      filters:
#        folders:
#          - publication
#        featured_only: true
#    design:
#      columns: '2'
#      view: card
  - block: collection
    id: dissertation
    content:
      title: PhD Dissertation
      filters:
        folders:
          - publication
        featured_only: true
    design:
      columns: '2'
      view: card
  - block: collection
    id: talks
    content:
      title: Recent Talks
      filters:
        folders:
          - event
    design:
      columns: '2'
      view: card
#  - block: markdown
#    content:
#      title: Gallery
#      subtitle: ''
#      text: |-
#        {{< gallery album="demo" >}}
#    design:
#      columns: '1'
#  - block: tag_cloud
#    content:
#      title: Popular Topics
#    design:
#      columns: '2'
  - block: contact
    id: contact
    content:
      title: Contact
      subtitle:
#      text: |-
#        Feel free to message me here if you would like to get in touch.
      # Contact (add or remove contact options as necessary)
      email: bkettle@ualberta.ca
      contact_links:
        - icon: linkedin
          icon_pack: fab
          name: DM Me
          link: https://www.linkedin.com/in/b-ket/
      # Automatically link email and phone or display as text?
      autolink: true
      # Email form provider
#      form:
#        provider: netlify
#        formspree:
#          id:
#        netlify:
#          # Enable CAPTCHA challenge to reduce spam?
#          captcha: false
    design:
      columns: '2'
---
