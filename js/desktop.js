jQuery.noConflict();
((PLUGIN_ID) => {
  "use strict";

  kintone.events.on(
    ["app.record.create.show", "app.record.edit.show"],
    async (event) => {
      // プラグインの設定情報を取得する
      const config = kintone.plugin.app.getConfig(PLUGIN_ID) || {};
      console.log(config);
      // 設定情報がなければ処理を終了する
      if (Object.keys(config).length === 0) {
        return;
      }
      const spaceField1 = jQuery(".gaia-argoui-app-edit-buttons")[0];

      if (config.anchors1 && config.labels1) {
        const menuButton1 = document.createElement("button");
        menuButton1.id = "menu_button1";
        menuButton1.type = "button";
        menuButton1.classList.add("iis_link");
        menuButton1.innerText = config.labels1;
        menuButton1.onclick = function () {
          let target1 =
            jQuery("#user-js-" + config.anchors1).offset().top - 200;
          jQuery("html,body").animate({ scrollTop: target1 }, 1000);
        };
        spaceField1.appendChild(menuButton1);
      }

      if (config.anchors2 && config.labels2) {
        const menuButton2 = document.createElement("button");
        menuButton2.id = "menu_button2";
        menuButton2.type = "button";
        menuButton2.classList.add("iis_link");
        menuButton2.innerText = config.labels2;
        menuButton2.onclick = function () {
          let target2 =
            jQuery("#user-js-" + config.anchors2).offset().top - 200;
          jQuery("html,body").animate({ scrollTop: target2 }, 1000);
        };
        spaceField1.appendChild(menuButton2);
      }
      if (config.anchors3 && config.labels3) {
        const menuButton3 = document.createElement("button");
        menuButton3.id = "menu_button3";
        menuButton3.type = "button";
        menuButton3.classList.add("iis_link");
        menuButton3.innerText = config.labels3;
        menuButton3.onclick = function () {
          let target3 =
            jQuery("#user-js-" + config.anchors3).offset().top - 200;
          jQuery("html,body").animate({ scrollTop: target3 }, 1000);
        };
        spaceField1.appendChild(menuButton3);
      }

      if (config.anchors4 && config.labels4) {
        const menuButton4 = document.createElement("button");
        menuButton4.id = "menu_button4";
        menuButton4.type = "button";
        menuButton4.classList.add("iis_link");
        menuButton4.innerText = config.labels4;
        menuButton4.onclick = function () {
          let target4 =
            jQuery("#user-js-" + config.anchors4).offset().top - 200;
          jQuery("html,body").animate({ scrollTop: target4 }, 1000);
        };
        spaceField1.appendChild(menuButton4);
      }

      if (config.anchors5 && config.labels5) {
        const menuButton5 = document.createElement("button");
        menuButton5.id = "menu_button5";
        menuButton5.type = "button";
        menuButton5.classList.add("iis_link");
        menuButton5.innerText = config.labels5;
        menuButton5.onclick = function () {
          let target5 =
            jQuery("#user-js-" + config.anchors5).offset().top - 200;
          jQuery("html,body").animate({ scrollTop: target5 }, 1000);
        };
        spaceField1.appendChild(menuButton5);
      }
      return event;
    }
  );
})(kintone.$PLUGIN_ID, jQuery);
