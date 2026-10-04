// CMS.registerPreviewTemplate(
//   "home",
//   createClass({
//     render() {
//       const entry = this.props.entry;
//       const title = entry.getIn(["data", "hero_title"]) || "";
//       console.log("PREVIEW RENDERED", title);

//       return h(
//         "div",
//         {
//           style: {
//             fontFamily: "Arial, sans-serif",
//             padding: "40px",
//             backgroundColor: "#f5f5f5",
//           },
//         },
//         h(
//           "div",
//           {
//             style: {
//               minHeight: "400px",
//               padding: "40px",
//               backgroundImage: "url('/Images/Fone.png')",
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               display: "flex",
//               alignItems: "center",
//             },
//           },
//           h(
//             "h1",
//             {
//               style: {
//                 maxWidth: "600px",
//                 color: "#fff",
//                 fontSize: "36px",
//               },
//             },
//             title
//           )
//         )
//       );
//     },
//   })
// );

CMS.registerPreviewTemplate(
  "home",
  createClass({
    render() {
      const entry = this.props.entry;

      const companyTitle =
        entry.getIn(["data", "company_title"]) || "Мы — СК Сириус";

      const companyDescription =
        entry.getIn(["data", "company_description"]) ||
        "Мы молодая компания, предоставляющая услуги по строительству и разработке проектов. Наша сила — уникальная сеть местных и международных навыков.";

      const title =
        entry.getIn(["data", "hero_title"]) ||
        "Простой способ построить свой успех";

      return h(
        "div",
        { className: "site-preview" },

        h(
          "style",
          null,
          `
            .site-preview {
              margin: 0;
              padding: 0;
              background: #fff;
              color: #130e58;
              font-family: Arial, sans-serif;
            }

            .site-preview * {
              box-sizing: border-box;
            }

            .site-preview .photo__container {
              position: relative;
              margin-inline: auto;
              max-width: 1440px;
              width: 100%;
              overflow: hidden;
            }

            .site-preview .image__photo {
              width: 100%;
              display: block;
              height: auto;
            }

            .site-preview .photo__content,
            .site-preview .email__content {
              position: absolute;
            }

            .site-preview .photo__content {
              top: 30%;
              left: 8.1%;
              background-color: rgba(255, 255, 255, 0.7);
              padding: 30px;
              border-radius: 20px;
            }

            .site-preview .photo__content h1 {
              margin-top: 0;
              margin-bottom: 64px;
              font-size: clamp(24px, 5vw, 70px);
              font-family: "SFT Schrifted", sans-serif;
              font-weight: 600;
              width: 29.25vw;
              max-width: 100%;
              border-radius: 20px;
              text-shadow: var(--text-shadow, 0 2px 8px rgba(255,255,255,.35));
              line-height: 1.15;
              overflow-wrap: break-word;
            }

            .site-preview .photo__content a {
              display: flex;
              justify-content: center;
              align-items: center;
              font-family: "Montserrat", sans-serif;
              font-weight: 500;
              font-size: clamp(22px, 1vw, 26px);
              background-color: #130e58;
              color: rgb(255, 255, 255);
              text-transform: uppercase;
              border: none;
              width: 360px;
              max-width: 100%;
              min-height: 70px;
              padding: 12px 18px;
              cursor: pointer;
              transition: all 0.25s ease;
              text-decoration: none;
              text-align: center;
            }

            .site-preview .photo__content a:hover {
              box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
              transform: translateY(-3px);
              border-radius: 6px;
            }

            .site-preview .email__content {
              right: 17px;
              top: 14px;
              font-size: 26px;
              font-family: "SFT Schrifted", sans-serif;
              text-decoration: underline;
              line-height: 31px;
              cursor: pointer;
              color: black;
              z-index: 2;
            }

            .site-preview .email__content-link {
              color: black;
            }

            .site-preview .email__content:hover {
              text-shadow: 1px 0 1px black;
              text-decoration: underline;
              text-decoration-thickness: 2px;
            }

            .site-preview .hero {
              padding: 64px 8.1%;
              background: #fff;
            }

            .site-preview .hero__container {
              max-width: 1440px;
              margin: 0 auto;
            }

            .site-preview .hero__title {
              font-family: "SFT Schrifted", sans-serif;
              font-size: clamp(28px, 3vw, 44px);
              line-height: 1.2;
              margin: 0 0 24px;
              color: #130e58;
            }

            .site-preview .hero__desc {
              max-width: 850px;
              font-family: "Montserrat", sans-serif;
              font-size: 18px;
              line-height: 1.7;
              color: #333;
            }

            @media (max-width: 700px) {
              .site-preview .photo__content {
                top: 25%;
                left: 4%;
                right: 4%;
                padding: 16px;
              }

              .site-preview .photo__content h1 {
                width: 100%;
                font-size: clamp(22px, 5vw, 36px);
                margin-bottom: 20px;
              }

              .site-preview .photo__content a {
                width: 100%;
                min-height: 52px;
                font-size: 16px;
              }

              .site-preview .email__content {
                right: 10px;
                top: 8px;
                font-size: clamp(11px, 2.5vw, 18px);
                line-height: 1.3;
              }

              .site-preview .hero {
                padding: 36px 6%;
              }

              .site-preview .hero__desc {
                font-size: 16px;
              }
            }
          `,
        ),

        h(
          "section",
          { className: "photo" },
          h(
            "div",
            { className: "photo__container" },

            h(
              "div",
              { className: "photo__content" },
              h("h1", null, title),
              h("a", { href: "/request.html" }, "Рассчитать стоимость"),
            ),

            h(
              "div",
              { className: "email__content" },
              h(
                "a",
                {
                  className: "email__content-link",
                  href: "mailto:SkSirius@su10.ru",
                },
                "SkSirius@su10.ru",
              ),
            ),

            h("img", {
              src: "/Images/Fone.png",
              alt: "",
              className: "image__photo",
            }),
          ),
        ),

        h(
          "section",
          { className: "hero" },
          h(
            "div",
            { className: "hero__container" },

            h("h2", { className: "hero__title" }, companyTitle),

            h("div", { className: "hero__desc" }, companyDescription),
          ),
        ),
      );
    },
  }),
);
