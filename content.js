const reviewChangeButton = document.querySelector("#overlay-show-review-changes-modal");

if (reviewChangeButton) {
  // ApproveボタンのHTML
  const approveButton = document.createElement("button");
  approveButton.id = "custom-approve-btn";
  approveButton.textContent = "LGTM Approve & Submit";
  approveButton.className = "Button--primary Button--small Button";

  // review changes ボタンの横に追加する
  reviewChangeButton.parentNode.appendChild(approveButton);

  // クリックアクションを追加する
  approveButton.addEventListener("click", function () {
    const form = document.querySelector("#pull_requests_submit_review");
    const approveInput = document.querySelector("#pull_request_review\\[event\\]_approve");
    const textarea = document.querySelector("#pull_request_review_body");

    if (form && approveInput && textarea) {
      approveInput.checked = true;
      textarea.value = "LGTMです！";
      form.submit();
    }
  });
}
