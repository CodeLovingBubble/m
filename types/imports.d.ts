// 确保Pinia存储可以被自动导入
declare module "#imports" {
    const useLocaleStore: typeof import("../stores/locale").useLocaleStore;
}
