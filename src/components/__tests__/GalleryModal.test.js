import { mount } from "@vue/test-utils";
import { describe, expect, test, beforeEach, vi } from "vitest";
import galleryModal from "../galleryModal.vue";

let wrapper = null;

describe("Gallery Modal Test", () => {
  beforeEach(() => {
    wrapper = mount(galleryModal, {
      props: { imgSrcList: ["url1", "url2", "url3"] },
    });
  });
  test("Testing openGallery function", async () => {
    let galleryWrapper = wrapper.find(".gallery-wrapper");

    expect(galleryWrapper.exists()).toEqual(false);

    wrapper.vm.openGallery(0);

    await wrapper.vm.$nextTick();

    galleryWrapper = wrapper.find(".gallery-wrapper");

    expect(galleryWrapper.isVisible()).toBe(true);
  });

  test("Testing is component showing correct img tag", async () => {
    wrapper.vm.openGallery(1);

    await wrapper.vm.$nextTick();

    const visibleImgTag = wrapper.find("img[src='url2']");
    const hiddenImgTag = wrapper.find("img[src='url1']");

    expect(visibleImgTag.isVisible()).toBe(true);

    expect(hiddenImgTag.isVisible()).toBe(false);
  });

  test("Testing swap right function", async () => {
    wrapper.vm.openGallery(1);

    wrapper.vm.swapRight();

    expect(wrapper.vm.currentPhotoIndex).toBe(2);
  });
  test("Testing swap left function", async () => {
    wrapper.vm.openGallery(1);

    wrapper.vm.swapLeft();

    expect(wrapper.vm.currentPhotoIndex).toBe(0);
  });
  test("Testing swap left for currentPhotoIndex has lowest value ", async () => {
    wrapper.vm.openGallery(0);

    wrapper.vm.swapLeft();

    expect(wrapper.vm.currentPhotoIndex).toBe(0);
  });
  test("Testing swap right for currentPhotoIndex has highest value", async () => {
    wrapper.vm.openGallery(2);

    wrapper.vm.swapRight();

    expect(wrapper.vm.currentPhotoIndex).toBe(2);
  });
  test("Testing closeGallery function", async () => {
    wrapper.vm.openGallery(0);

    wrapper.vm.closeGallery();

    expect(wrapper.vm.isGalleryOpen).toBe(false);
  });
  test("Testing key when isGalleryOpenWatcher ", async () => {
    window.addEventListener = vi.fn((event, handler) => {});

    wrapper.vm.isGalleryOpen = true;

    await wrapper.trigger("keyUp", { key: "ArrowRight" });

    expect(window.addEventListener).toHaveBeenCalledOnce();
  });
});
