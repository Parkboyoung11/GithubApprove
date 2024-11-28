function addApproveButton() {
  const reviewChangeButton = document.querySelector("#overlay-show-review-changes-modal");

  if (reviewChangeButton && !document.querySelector("#custom-approve-btn")) {
    const approveButton = document.createElement("button");
    approveButton.id = "custom-approve-btn";
    approveButton.textContent = "LGTM Approve & Submit";
    approveButton.className = "Button--primary Button--small Button";
    approveButton.style.marginLeft = "10px";

    reviewChangeButton.parentNode.insertBefore(approveButton, reviewChangeButton.nextSibling);

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
}

const observer = new MutationObserver(() => {
  if (document.querySelector("#overlay-show-review-changes-modal")) {
    addApproveButton();
  }
});

observer.observe(document.body, { childList: true, subtree: true });

addApproveButton();
