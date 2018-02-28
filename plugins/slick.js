import Vue from 'vue'
import Slick from 'vue-slick'

Slick.lazyLoad = function () {
  var _ = this,
    loadRange, cloneRange, rangeStart, rangeEnd

  function loadImages (imagesScope) {
    $('img[data-lazy]', imagesScope).each(function () {
      var image = $(this),
        imageSource = $(this).attr('data-lazy'),
        imageToLoad = document.createElement('img')

      imageToLoad.onload = function () {
        image
          .animate({
            opacity: 0
          }, 100, function () {
            image
              .attr('src', imageSource)
              .animate({
                opacity: 1
              }, 200, function () {
                image
                  .removeAttr('data-lazy')
                  .removeClass('slick-loading')
              })
            _.$slider.trigger('lazyLoaded', [_, image])
          })
      }

      imageToLoad.src = imageSource
    })
  }

  if (_.options.centerMode === true) {
    if (_.options.infinite === true) {
      rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1)
      rangeEnd = rangeStart + _.options.slidesToShow + 2
    } else {
      rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1))
      rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide
    }
  } else {
    rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide
    rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow)
    if (_.options.fade === true) {
      if (rangeStart > 0) rangeStart--
      if (rangeEnd <= _.slideCount) rangeEnd++
    }
  }

  loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd)
  loadImages(loadRange)

  if (_.slideCount <= _.options.slidesToShow) {
    cloneRange = _.$slider.find('.slick-slide')
    loadImages(cloneRange)
  } else
  if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
    cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow)
    loadImages(cloneRange)
  } else if (_.currentSlide === 0) {
    cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1)
    loadImages(cloneRange)
  }
}

Vue.component('slick', Slick)
