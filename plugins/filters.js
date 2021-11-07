import Vue from "vue";

Vue.filter('formatDate', (dateStr) =>
  Intl.DateTimeFormat("us-EN").format(new Date(dateStr))
);

Vue.filter('capitalize', (val) => {
  if (!val) return ''
  val = val.toString()
  return val.charAt(0).toUpperCase() + val.slice(1)
});
