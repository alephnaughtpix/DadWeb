$(document).ready(function(){function g(a,d){a.append("Last updated: "+d)}function l(a,d,e){var b=new XMLHttpRequest;b.open("GET",a);b.addEventListener("load",function(){d(e,b.getResponseHeader("Last-Modified"))},!1);b.send(null)}var k=/(<\/?\w+(?:(?:\s+\w+(?:\s*=\s*(?:".*?"|'.*?'|[^'">\s]+))?)+\s*|\s*)\/?>)/gim;(function(){$(".counter").each(function(){for(var a=$(this),d=a.attr("rel"),e="",b=0;b<=d;b++)e+=Math.floor(8*Math.random())+1+"";a.append(e)})})();(function(){$(".l33TsP33k").each(function(){for(var a=
"",d=$(this).html().split(k),e=d.length,b=0;b<e;b++){var c=d[b].trim();if(""!=c)if("<"!=c.substring(0,1))for(var c=c.split(/\s+/),g=c.length,h=0;h<g;h++){var f=c[h].trim();""!=f&&(a+='<span class="l33Tf1RsT">'+f.substring(0,1)+"</span>"+f.substring(1,f.length)+" ")}else a+=c}$(this).html(a)})})();(function(){$("#homeMenu .menuItem .icon").each(function(){var a=$(this).parent().find(".text a")[0];""!=a?null!=a.target&&""!=a.target?$(this).click(function(){window.open(a.href,a.target)}):$(this).click(function(){window.location=
a.href}):$(this).css("cursor","default")})})();(function(){$("#SDFaq").each(function(){for(var a="",d=$(this).html().split(k),e=d.length,b=0;b<e;b++){var c=d[b].trim();""!=c&&("<"!=c.substring(0,1)?(c=c.replace(/(faq)/gi,"<span class='faq'>$1</span>"),a+=c+" "):a+=c)}$(this).html(a)})})();$(".blink").modernBlink();$(".lastUpdated").append("Last updated: "+document.lastModified);$(".urlLastUpdated").each(function(){var a=$(this);l(a.attr("rel"),g,a)});$(".link").click(function(){window.location=$(this).attr("rel")});
$("#saggie .title").each(function(){$(this).attr("title","sAgG13!!!1!");$(this).click(function(){window.location="/default.html"})});$(".more").each(function(){$(this).attr("title","[ m0R3!!!11!1 ]");$(this).click(function(){window.location=$(this).attr("rel")})})});