// import {lazy} from "react"
// export function Lazyload(path:string, namedExport?: string) {
//   return lazy(() => {
//     return import(path).then(module => {
//       if (!namedExport) {
//         // default export
//         return module;
//       } else {
//         // named export → convert to default export
//         return { default: module[namedExport] };
//       }
//     });
//   });
// }
