This is a [Next.js 13](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Install appropriate node

```
nvm use v18

pnpm install
```

First, run the development server:

```bash
pnpm run dev
```

Husky 安装

```bash
pnpm prepare
```

Git 提交

```bash
git commit -m 'feat: 修改内容'
```

## Git commit 提交规范

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

type 代表某次提交的类型，比如是修复一个 bug 或是增加一个 feature，具体类型如下：

| Type     | 说明                                                    |
| -------- | ------------------------------------------------------- |
| feat     | 新增 feature                                             |
| fix      | 修复 bug                                                 |
| docs     | 仅仅修改了文档，比如 README, CHANGELOG, CONTRIBUTE 等等     |
| style    | 仅仅修改了空格、格式缩进、逗号等等，不改变代码逻辑               |
| refactor | 代码重构，没有加新功能或者修复 bug                      |
| perf     | 优化相关，比如提升性能、体验                            |
| test     | 测试用例，包括单元测试、集成测试等                      |
| chore    | 改变构建流程、或者增加依赖库、工具等                    |
| revert   | 回滚到上一个版本                                        |
