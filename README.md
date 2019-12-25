# CCFrank

The Chrome Extension displays the China Computer Federation rankings of conferences and journals in the search results. Currently supports ACM Digital Library, IEEE Xplore Digital Library, and dblp computer science bibliography.

Chrome 扩展程序，在搜索结果中显示中国计算机学会的会议和期刊排名。目前支持 ACM Digital Library、IEEE Xplore Digital Library 和 dblp computer science bibliography。在 dblp 中添加了根据 ccf 等级筛选论文的功能，添加了各个会议期刊在CCF中的分类，对于不熟悉会议期刊的同学应该有一定帮助，同时也可以参考学者的期刊论文发表情况~

## Preview

![CCFrank on dblp](./img/dblp.png)
![CCFrank dblp refine-by list](./img/dblp-Refine.png)


## Install

Load from the source.

### Load Unpacked

Clone CCFrank to a directory.

1. Open the Extension Management page by navigating to `chrome://extensions`.
    
    - The Extension Management page can also be opened by clicking on the Chrome menu, hovering over **More Tools** then selecting **Extensions**.

2. Enable Developer Mode by clicking the toggle switch next to **Developer mode**.

3. Click the **LOAD UNPACKED** button and select the directory holding CCFrank.

<img src="./img/load_unpacked.png" height="300" alt="Load Extension">

## What's New

**Version 1.1**

Nov 15, 2019

1. 适配 dblp '2019-11-11: Open citation data and dblp' [Feature Spotlight]，建议更新到此版本。

**Version 1.0**

Aug 28, 2019

1. 优化了 dblp 上会议和刊物名称的匹配规则；
2. 修正了错误，更新到《中国计算机学会推荐国际学术会议和期刊目录》第五版（2019年4月）。

## Acknowledgement

I would like to express my appreciation to [S.H. Lee](https://github.com/hnshhslsh) and [yishanchuan](https://github.com/yishanchuan) for their previous work.
