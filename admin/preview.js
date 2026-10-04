
CMS.registerPreviewTemplate(
  "home",
  createClass({
    render() {
      const entry = this.props.entry;
      const title = entry.getIn(["data", "hero_title"]) || "";
      console.log("PREVIEW RENDERED", title);

      return h(
        "div",
        {
          style: {
            fontFamily: "Arial, sans-serif",
            padding: "40px",
            backgroundColor: "#f5f5f5",
          },
        },
        h(
          "div",
          {
            style: {
              minHeight: "400px",
              padding: "40px",
              backgroundImage: "url('/Images/Fone.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "center",
            },
          },
          h(
            "h1",
            {
              style: {
                maxWidth: "600px",
                color: "#fff",
                fontSize: "36px",
              },
            },
            title
          )
        )
      );
    },
  })
);
