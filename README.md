# CCFrank

The Chrome Extension displays the China Computer Federation rankings of conferences and journals in the search results. Currently supports ACM Digital Library, IEEE Xplore Digital Library, and dblp computer science bibliography.

Chrome 扩展程序，在搜索结果中显示中国计算机学会的会议和期刊排名。目前支持 ACM Digital Library、IEEE Xplore Digital Library 和 dblp computer science bibliography。

## Preview

![CCFrank on dblp](./img/dblp.png)


## Install

Load from the source (Recommended) *or* directly install the binary.

### Load Unpacked

Clone CCFrank to a directory.

1. Open the Extension Management page by navigating to `chrome://extensions`.
    
    - The Extension Management page can also be opened by clicking on the Chrome menu, hovering over **More Tools** then selecting **Extensions**.

2. Enable Developer Mode by clicking the toggle switch next to **Developer mode**.

3. Click the **LOAD UNPACKED** button and select the directory holding CCFrank.

![Load Extension](./img/load_unpacked.png)

### Install the `.crx` file

Download the [latest release](https://github.com/WenyanLiu/CCFrank/releases).

1. Open the Extension Management page by navigating to `chrome://extensions`.
    
    - The Extension Management page can also be opened by clicking on the Chrome menu, hovering over **More Tools** then selecting **Extensions**.

2. Enable Developer Mode by clicking the toggle switch next to **Developer mode**.

3. Install the `CCFrank_x.x.crx` file by dropping it into the Chrome Extension's Management page.

![Drop to install](./img/drop_install.png)

## What's New

**Version 1.0**

Aug 28, 2019

1. 优化了 dblp 上会议和刊物名称的匹配规则；
2. 修正了错误，更新到《中国计算机学会推荐国际学术会议和期刊目录》第五版（2019年4月）。

## Acknowledgement

I would like to express my appreciation to [S.H. Lee](https://github.com/hnshhslsh) and [yishanchuan](https://github.com/yishanchuan) for their previous work.