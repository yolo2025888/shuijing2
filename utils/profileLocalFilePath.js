module.exports = {
  isMiniProgramLocalFilePath: function (t) {
    var i = String(t || "").trim();
    return (
      /^(wxfile|file):\/\//i.test(i) ||
      /^https?:\/\/(?:tmp|usr)\//i.test(i) ||
      /^https?:\/\/(?:127\.0\.0\.1|localhost)(?::\d+)?\/__(?:tmp|usr)__\//i.test(
        i
      )
    );
  },
};
