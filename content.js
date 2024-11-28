function addLGTMButton() {
  const reviewChangeButton = document.querySelector("#overlay-show-review-changes-modal");
  if (reviewChangeButton && !document.querySelector("#custom-approve-btn")) {
    const newButton = document.createElement("button");
    newButton.id = "custom-approve-btn";
    newButton.textContent = "LGTM Approve & Submit";
    newButton.className = "Button--primary Button--small Button";
    newButton.style.marginLeft = "10px";
    reviewChangeButton.parentNode.insertBefore(newButton, reviewChangeButton.nextSibling);

    newButton.addEventListener("click", function () {
      const form = document.querySelector("#pull_requests_submit_review");
      const approveInput = document.querySelector("#pull_request_review\\[event\\]_approve");
      const textarea = document.querySelector("#pull_request_review_body");

      if (form && approveInput && textarea) {
        approveInput.checked = true;
        textarea.value = "LGTMです！";
        form.submit();
      } else {
        console.error("Form, input, or textarea not found!");
      }
    });
  } else {
    console.error("Review change button not found!");
  }
}

const observer = new MutationObserver((mutations) => {
  let relevantChange = false;

  mutations.forEach((mutation) => {
    if (
      mutation.addedNodes.length > 0 &&
      document.querySelector("#overlay-show-review-changes-modal")
    ) {
      relevantChange = true;
    }
  });

  if (relevantChange) {
    addLGTMButton();
  }
});

observer.observe(document.body, { childList: true, subtree: true });

addLGTMButton();
