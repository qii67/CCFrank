const dblp = {};

dblp.rankingSpanProvider = [];
var rank_show = "";

dblp.start = function () {
    let interval = setInterval(function () {
        let url = window.location.href;
        let title = $('head > title').text();
        if (url.startsWith("https://dblp.uni-trier.de/") || title.indexOf("Search for") != -1) {
            let message = $('div > p.waiting');
            if (message.css('display') == "none") {
                $(window).bind('popstate', function () {
                    dblp.addRankings();
                });
                dblp.addRankings();
            }
        }
        dblp.displayRank(rank_show);
    }, 1000);

    $(function() {
        setTimeout(function() {
            addRefineByCCF();
        },1000);
    });
}

function addRefineByCCF() {

    var ranksection = '<div class="refine-by ccfrank"><p><b>refine by CCF-Rank</b></p><ul class="options" style=""><li class="add"><img class="mark" src="https://dblp.uni-trier.de/img/add-mark.12x12.png"><button class="text1 ccf ccfa" value="CCF A">CCF A</button></li><li class="add"><img class="mark" src="https://dblp.uni-trier.de/img/add-mark.12x12.png"><button class="text1 ccf ccfb" value="CCF B">CCF B</button></li><li class="add"><img class="mark" src="https://dblp.uni-trier.de/img/add-mark.12x12.png"><button class="text ccf ccfc " value="CCF C">CCF C</button></li><li class="add"><img class="mark" src="https://dblp.uni-trier.de/img/add-mark.12x12.png"><button class="text1 ccf ccfn" value="CCF n">ALL exclude these</button></li><li class="add"><img class="mark" src="https://dblp.uni-trier.de/img/add-mark.12x12.png"><button class="text1 ccf all" value="">ALL</button></li></ul></div>';

    if ($(".search").length > 0) {
        $($(".hide-body .refine-by")[1]).after(ranksection);
    } else {
        $($(".hide-body .refine-by")[0]).before(ranksection);
    }

    $(".all").addClass("selected");

    $(".ccf").click(function () {
        // console.log("click");
        rank_show = $(this).val();
        $(".ccf").removeClass("selected");
        $(this).addClass("selected");
        // dblp.displayRank("CCF n");
        dblp.displayRank(rank_show);
    });
}

dblp.addRankings = function () {
    let results = $("cite > a > span:nth-child(1) > span:nth-child(1)");
    dblp.resultsCount = results.length;

    results.each(function (index) {
        let result = $(this);
        let source = result.text().trim();
        if (source.length != 0) {
            let names = dblp.parseNames(source);
            for (let getRankingSpan of dblp.rankingSpanProvider) {
                if ($(this).parent().parent().next().hasClass('ccf-ranking')) {
                    $(result).parent().parent().after('');
                } else {
                    $(result).parent().parent().after(getRankingSpan(names));
                }
            }
        }

    });
}

dblp.parseNames = function (source) {
    let names = [];
    let index = source.lastIndexOf('(');
    let full;
    let abbr;
    if (index != -1) {
        source = source.substring(0, index).trim();
    }
    let possible = ccf.rankingDblpName[source];
    if (possible != undefined) {
        source = ccf.rankingDblpName[source];
    }
    if (source.length <= 12) {
        abbr = source;
        full = "";
    } else {
        full = source;
        abbr = "";
    }
    full = siteUtil.removeNumbers(full).split(";");
    abbr = abbr.split("/");
    for (let i = 0; i < Math.max(full.length, abbr.length); ++i) {
        let name = {};
        name.full = (full[i] || "").trim();
        name.abbr = (abbr[i] || "").trim();
        names.push(name);
    }
    return names;
}

dblp.displayRank = function (rank) {
    // console.log("rank is: " + rank);
    const CCFRANKS = ["CCF A", "CCF B", "CCF C", "CCF n", ""];
    $("li.entry").each(function () {
        if (CCFRANKS.indexOf($(this).find("span.ccf-ranking").text().substring(0, 5)) <= CCFRANKS.indexOf(rank)) {
            this.style.display = 'block';
        } else
            this.style.display = 'none';
    });
}