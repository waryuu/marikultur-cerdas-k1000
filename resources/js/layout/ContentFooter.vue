<template>
  <footer class="footer px-4 bg-primary">
    <div class="row align-items-center justify-content-lg-between">
      <div class="col-lg-6">
        <div class="copyright text-center text-lg-left text-secondary">
          © {{year}} <a href="https://www.ipb.ac.id/" class="font-weight-bold ml-1 text-white" target="_blank">IPB University</a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
