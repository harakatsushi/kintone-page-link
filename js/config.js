((PLUGIN_ID) => {
  // エスケープ処理
  const escapeHtml = (htmlstr) => {
    if (!htmlstr) {
      return "";
    }
    return htmlstr
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;")
      .replace(/\n/g, "&#xA;");
  };
  // プラグインの設定情報を取得
  const config = kintone.plugin.app.getConfig(PLUGIN_ID);

  const anchors1Data = document.getElementById("link-anchor-1");
  const anchors2Data = document.getElementById("link-anchor-2");
  const anchors3Data = document.getElementById("link-anchor-3");
  const anchors4Data = document.getElementById("link-anchor-4");
  const anchors5Data = document.getElementById("link-anchor-5");

  const labels1Data = document.getElementById("link-label-1");
  const labels2Data = document.getElementById("link-label-2");
  const labels3Data = document.getElementById("link-label-3");
  const labels4Data = document.getElementById("link-label-4");
  const labels5Data = document.getElementById("link-label-5");

  anchors1Data.value = config.anchors1 || "";
  anchors2Data.value = config.anchors2 || "";
  anchors3Data.value = config.anchors3 || "";
  anchors4Data.value = config.anchors4 || "";
  anchors5Data.value = config.anchors5 || "";

  labels1Data.value = config.labels1 || "";
  labels2Data.value = config.labels2 || "";
  labels3Data.value = config.labels3 || "";
  labels4Data.value = config.labels4 || "";
  labels5Data.value = config.labels5 || "";
  // アプリID取得
  const appId = kintone.app.getId();

  // 「キャンセル」ボタン押下時にプラグイン一覧画面に遷移する
  const cancelButton = document.getElementById("cancel");
  cancelButton.addEventListener("click", () => {
    // プラグイン一覧画面に遷移する
    window.location.href = `/k/admin/app/${appId}/plugin/`;
  });

  // 「保存する」ボタン押下時に入力情報を設定する
  const saveButton = document.getElementById("submit");
  saveButton.addEventListener("click", () => {
    const anchors1 = escapeHtml(anchors1Data.value);
    const anchors2 = escapeHtml(anchors2Data.value);
    const anchors3 = escapeHtml(anchors3Data.value);
    const anchors4 = escapeHtml(anchors4Data.value);
    const anchors5 = escapeHtml(anchors5Data.value);

    const labels1 = escapeHtml(labels1Data.value);
    const labels2 = escapeHtml(labels2Data.value);
    const labels3 = escapeHtml(labels3Data.value);
    const labels4 = escapeHtml(labels4Data.value);
    const labels5 = escapeHtml(labels5Data.value);

    var body = {
      app: appId,
    };
    let anchors1_err = true;
    let anchors2_err = true;
    let anchors3_err = true;
    let anchors4_err = true;
    let anchors5_err = true;
    if (!anchors1) {
      anchors1_err = false;
    }
    if (!anchors2) {
      anchors2_err = false;
    }
    if (!anchors3) {
      anchors3_err = false;
    }
    if (!anchors4) {
      anchors4_err = false;
    }
    if (!anchors5) {
      anchors5_err = false;
    }
    kintone.api(
      kintone.api.url("/k/v1/app/form/layout.json", true),
      "GET",
      body,
      function (resp) {
        // success
        console.log(resp);
        for (let index = 0; index < resp.layout.length; index++) {
          const element = resp.layout[index];
          if (
            element.fields[0].type == "SPACER" &&
            anchors1 == element.fields[0].elementId
          ) {
            anchors1_err = false;
          }
          if (
            element.fields[0].type == "SPACER" &&
            anchors2 == element.fields[0].elementId
          ) {
            anchors2_err = false;
          }
          if (
            element.fields[0].type == "SPACER" &&
            anchors3 == element.fields[0].elementId
          ) {
            anchors3_err = false;
          }
          if (
            element.fields[0].type == "SPACER" &&
            anchors4 == element.fields[0].elementId
          ) {
            anchors4_err = false;
          }
          if (
            element.fields[0].type == "SPACER" &&
            anchors5 == element.fields[0].elementId
          ) {
            anchors5_err = false;
          }
        }
        if (anchors1_err) {
          alert("1番目のスペースIDが存在しません");
          return;
        }
        if (anchors2_err) {
          alert("2番目のスペースIDが存在しません");
          return;
        }
        if (anchors3_err) {
          alert("3番目のスペースIDが存在しません");
          return;
        }
        if (anchors4_err) {
          alert("4番目のスペースIDが存在しません");
          return;
        }
        if (anchors5_err) {
          alert("5番目のスペースIDが存在しません");
          return;
        }

        // プラグインの設定を保存
        const newConfig = {
          anchors1,
          anchors2,
          anchors3,
          anchors4,
          anchors5,
          labels1,
          labels2,
          labels3,
          labels4,
          labels5,
        };
        console.log(newConfig);
        kintone.plugin.app.setConfig(newConfig, () => {
          // アプリの設定画面に遷移する
          window.location.href = `/k/admin/app/flow?app=${appId}`;
        });
      },
      function (error) {
        // error
        console.log(error);
      }
    );
  });
})(kintone.$PLUGIN_ID);
