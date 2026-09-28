(function () {
  "use strict";

  var works = Array.prototype.slice.call(document.querySelectorAll(".work"));

  // Detail sheet
  var modal = document.getElementById("work-modal");
  var modalImage = modal.querySelector(".modal-image img");
  var modalBadge = modal.querySelector(".badge");
  var modalYear = modal.querySelector(".modal-year");
  var modalTitle = modal.querySelector("h2");
  var modalSummary = modal.querySelector(".modal-summary");
  var modalDetail = modal.querySelector(".modal-detail");
  var modalTags = modal.querySelector(".tags");
  var modalScroll = modal.querySelector(".modal-scroll");

  function openWork(work) {
    var img = work.querySelector(".thumb img");
    modalImage.src = img.src;
    modalImage.alt = img.alt;
    modalBadge.textContent = work.querySelector(".badge").textContent;
    modalYear.textContent = work.querySelector(".year").textContent;
    modalTitle.textContent = work.querySelector("h3").textContent;
    modalSummary.textContent = work.querySelector(".work-body p").textContent;
    modalDetail.innerHTML = work.querySelector(".work-detail").innerHTML;
    modalTags.innerHTML = work.querySelector(".work-body .tags").innerHTML;
    modalScroll.scrollTop = 0;
    modal.showModal();
    document.body.style.overflow = "hidden";
  }

  works.forEach(function (work) {
    work.querySelector(".work-card").addEventListener("click", function () { openWork(work); });
  });

  modal.querySelector(".modal-close").addEventListener("click", function () { modal.close(); });
  modal.addEventListener("click", function (e) { if (e.target === modal) modal.close(); });
  modal.addEventListener("close", function () { document.body.style.overflow = ""; });
})();
