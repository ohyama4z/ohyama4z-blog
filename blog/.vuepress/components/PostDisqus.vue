<template>
  <div id="disqus_thread"></div>
</template>

<script>
export default {
  name: "PostDisqus",

  mounted() {
    var disqus_config = function() {
      this.page.url = window.location.origin;
      this.page.identifier = window.location.pathname;
    };
    (function() {
      // DON'T EDIT BELOW THIS LINE
      var d = document,
        s = d.createElement("script");
      s.src = "https://ohyama4z-blog.netlify.app.disqus.com/embed.js";
      s.setAttribute("data-timestamp", +new Date());
      (d.head || d.body).appendChild(s);
    })();
  },
};
</script>
