import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.SidebarItem[] = [
    {
        text: "指南",
        collapsed: false,
        items: [
            {text: "开始", link: "/zhCN/guide/"},
            {text: "我们的团队", link: '/zhCN/team'}
        ]
    },
    {
        text: "CMFS",
        collapsed: false,
        items: [
            {text: "简介", link: "/zhCN/CMFS/"}
        ]
    },
    {
        text: "LauncherX 启动器指南",
        collapsed: false,
        items: [
            {
                text: "初次启动",
                link: "/zhCN/lxguide/startup/",
                collapsed: false,
                items: [
                    {text: "针对 Windows 系统", link: "/zhCN/lxguide/startup/perOsSetup/windows"},
                    {text: "针对 macOS 系统", link: "/zhCN/lxguide/startup/perOsSetup/macOS"},
                    {text: "针对 Linux 系统", link: "/zhCN/lxguide/startup/perOsSetup/linux"}
                ]
            },
            {text: "初次设置: 添加账户", link: "/zhCN/lxguide/add-game-account"},
            {text: "仪表盘", link: "/zhCN/dashboard/"},
            {text: "聚合搜索组件", link: "/zhCN/dashboard/search"}
        ],
    },
    {
        text: "Minecraft",
        collapsed: false,
        items: [
            {text: "皮肤规范", link: "/zhCN/skin/"}
        ]
    },
    {
        text: "ProjBobcat",
        collapsed: false,
        items: [
            {text: "简介", link: "/zhCN/projbobcat/"},
            {text: "开始", link: "/zhCN/projbobcat/beforeWeStart"},
            {
                text: "安装与配置",
                link: "/zhCN/projbobcat/installationAndConfig",
                items: [
                    {text: "配置 Azure 应用", link: "/zhCN/projbobcat/createNewAzureApp"}
                ]
            },
            {
                text: "验证模型",
                collapsed: false,
                link: "/zhCN/projbobcat/authenticators/",
                items:[
                    {text: "离线验证模型", link: "/zhCN/projbobcat/authenticators/offline"},
                    {text: "Yggdrasil 验证模型（旧版）", link: "/zhCN/projbobcat/authenticators/yggdrasil"},
                    {text: "Microsoft 验证模型（新版）", link: "/zhCN/projbobcat/authenticators/microsoft"}
                ]
            },
            {
                text: "安装器",
                collapsed: false,
                link: "/zhCN/projbobcat/installers/",
                items: [
                    {text: "CurseForge 整合包安装器", link: "/zhCN/projbobcat/installers/curseforge"},
                    {text: "Fabric 安装器", link: "/zhCN/projbobcat/installers/fabric"},
                    {text: "Forge 安装器", link: "/zhCN/projbobcat/installers/forge"},
                    {text: "LiteLoader 安装器", link: "/zhCN/projbobcat/installers/liteloader"},
                    {text: "Optifine 安装器", link: "/zhCN/projbobcat/installers/optifine"},
                    {text: "Quilt 安装器", link: "/zhCN/projbobcat/installers/quilt"}
                ]
            },
            {
                text: "资源补全器",
                link: "/zhCN/projbobcat/resourceCompleter/",
                items: [
                    {
                        text: "资源解析器",
                        collapsed: false,
                        link: "/zhCN/projbobcat/resourceCompleter/resourceInfoResolver/index",
                        items: [
                            {text: "Assets 解析器", link: "/zhCN/projbobcat/resourceCompleter/resourceInfoResolver/assetInfoResolver"},
                            {text: "log4j 日志格式化组件解析器", link: "/zhCN/projbobcat/resourceCompleter/resourceInfoResolver/gameLoggingInfoResolver"},
                            {text: "Libraries 解析器", link: "/zhCN/projbobcat/resourceCompleter/resourceInfoResolver/libraryInfoResolver"},
                            {text: "版本信息解析器", link: "/zhCN/projbobcat/resourceCompleter/resourceInfoResolver/versionInfoResolver"}
                        ]
                    },
                    {text: "创建和配置补全器", link: "/zhCN/projbobcat/resourceCompleter/createAndConfigCompleter"}
                ]
            },
            {
                text: "附加解析器",
                link: "/zhCN/projbobcat/additionalParsers/",
                items: [
                    {text: "游戏档案解析器", link: "/zhCN/projbobcat/additionalParsers/gameProfileParser"},
                    {text: "账户档案解析器", link: "/zhCN/projbobcat/additionalParsers/accountProfileParser"}
                ]
            }
        ]
    }
];

export default sidebar;
