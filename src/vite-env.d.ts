/// <reference types="vite/client" />

type ImportMetaEnv = {
    readonly VITE_API_BASE_URL: string;
// other variables can be added here
}

type ImportMeta = {
    readonly env: ImportMetaEnv;
}
// type ImportMeta = {
//     readonly env: any;
// }