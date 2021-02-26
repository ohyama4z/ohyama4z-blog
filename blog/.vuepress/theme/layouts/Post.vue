<template>
  <div class="post">
    <PostMeta v-if="meta" />

    <article class="main-div">
      <Content :key="$page.path" class="post-content content" />
    </article>

    <PostMeta v-if="meta" />
    <Post-disqus />
  </div>
</template>

<script>
import PostMeta from "@theme/components/PostMeta.vue";
import PostDisqus from "../components/PostDisqus";

export default {
  name: "Post",

  components: {
    PostMeta,
    PostDisqus,
  },

  computed: {
    meta() {
      return this.$frontmatter.meta !== false;
    },

    vssue() {
      return (
        this.$themeConfig.comments !== false &&
        this.$frontmatter.vssue !== false &&
        (this.vssueTitle || this.vssueId)
      );
    },

    vssueTitle() {
      return (
        this.$frontmatter["vssue-title"] || this.$frontmatter.title || undefined
      );
    },

    vssueId() {
      return this.$frontmatter["vssue-id"] || undefined;
    },
  },
};
</script>
