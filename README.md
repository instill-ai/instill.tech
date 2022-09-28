# instill.tech

This repository maintains the Instill AI product website and VDP documentation.

## Contribution
1. Clone the github
2. `pnpm install`

## Build up next app
```bash
pnpm run dev
```

Then, go to `http://localhost:3000`. You can add `-p <port number>` to the command to deploy on a different port.

## Build up storybook
```bash
pnpm run storybook
```

## About how to contribute to Documentation

### Every document lie under the `/docs` folder.

- The routing will match the path, take getting-started page for example, its path is `/docs/start-here/getting-started.mdx` the url will be `https://www.instill.tech/docs/start-here/getting-started`
- The file name and the folder name only allow `kebab-case`.

### Navbar and Sidebar

You could adjust Navbar and Sidebar item in `docs.config.tsx` in the root.

- Please add every page in the sidebar. 
- Please follow the type instruction.

### About the extended markdown syntax

#### Info-block

- We offer four info-block variant: info, warning, danger and tip. No custom variant allowed, if you fill in other variant, the build will failed. 
- Please do enclose the info-block with proper syntax, every missed ::: will cause some unwanted behavior.(Currently, we don't have way to detect this kind of syntax error)


```md
:::info{type=info}
This is info block with info type
:::
```

```md
:::info{type=warning}
This is info block with warning type
:::
```

```md
:::info{type=danger}
This is info block with danger type
:::
```

```md
:::info{type=tip}
This is info block with danger type
:::
```

#### YouTube embed

- We offer YouTube embed
- Currently we don't support custom dimensions

##### Syntax

```md
::youtube[title]{#id}
```

Example

```md
::youtube[This is a cat video]{#2MP5Ov_H4Go}
```

##### How to get the YouTube video id

You can get video id with regular YouTube url. For example `https://www.youtube.com/watch?v=2MP5Ov_H4Go&ab_channel=NaturalWorldTriumph`. The YouTube id is after `watch?v=` that is `2MP5Ov_H4Go`.

#### Details section

Please follow markdown details syntax like below

```md
<details>
  <summary>**Is VDP free?**</summary>

  Content
</details>
```