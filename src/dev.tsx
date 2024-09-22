import React from "react";
import ReactDOM from "react-dom/client";
import "./css/base.css";
import classes from "./dev.module.css";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

function Main() {
  return <div className={classes.main}>Scribble analyser</div>;
}

// type FooterLinkProps = {
//   children: React.ReactNode;
//   href: string;
// };

// function FooterLink(props: FooterLinkProps) {
//   return <a className={classes.link} target="_blank" {...props} />;
// }

// function List() {
//   return (
//     <>
//       <ListHeader>
//         Pixijs experiments -{" "}
//         <a
//           className={classes.link}
//           href="https://github.com/dxinteractive/scribble-analyser"
//         >
//           github repo
//         </a>
//       </ListHeader>
//       <ol className={classes.list}>
//         {all.map((experiment) => {
//           return (
//             <li className={classes.listItem} key={experiment.id}>
//               <Link to={`/${experiment.id}`}>{experiment.name}</Link>
//             </li>
//           );
//         })}
//       </ol>
//     </>
//   );
// }

// type ListHeaderProps = {
//   children: React.ReactNode;
// };

// function ListHeader(props: ListHeaderProps) {
//   return (
//     <header className={classes.header}>
//       <div className={classes.headerTitle}>{props.children}</div>
//     </header>
//   );
// }

// import Two from "two.js";

// function Component() {
//   const divRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const div = divRef.current;
//     if (!div) {
//       return;
//     }

//     const two = new Two({
//       width: 400,
//       height: 400,
//       autostart: true,
//       type: Two.Types.svg,
//     }).appendTo(div);

//     const rect = two.makeRectangle(two.width / 2, two.height / 2, 50, 50);
//     two.bind("update", () => {
//       rect.rotation += 0.01;
//     });

//     return () => {
//       two.unbind("update");
//       two.pause();
//       div.removeChild(two.renderer.domElement);
//     };
//   }, []);

//   return <div ref={divRef} />;
// }
