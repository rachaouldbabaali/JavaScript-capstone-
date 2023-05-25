"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module './style.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _modules_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/view.js */ "./src/modules/view.js");



(0,_modules_view_js__WEBPACK_IMPORTED_MODULE_1__["default"])();


/***/ }),

/***/ "./src/modules/bookCount.js":
/*!**********************************!*\
  !*** ./src/modules/bookCount.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const bookCount = (count) => {
  const counter = document.getElementById('book-count');
  counter.innerHTML = `(${count})`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bookCount);


/***/ }),

/***/ "./src/modules/getBooks.js":
/*!*********************************!*\
  !*** ./src/modules/getBooks.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const OPEN_LIBRARY_API_URL = 'https://openlibrary.org';

const fetchScienceFictionBooks = async () => {
  const response = await fetch(
    `${OPEN_LIBRARY_API_URL}/subjects/science_fiction.json?limit=18`,
  );
  if (!response.ok) {
    throw new Error('Failed to fetch Science Fiction books data');
  }
  const data = await response.json();
  return data.works;
};

const formatBookData = (book) => {
  const bookData = {
    title: book.title,
    coverImageUrl: `https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`,
    publishYear: book.first_publish_year,
  };
  return bookData;
};

const getBooks = async () => {
  const books = await fetchScienceFictionBooks();
  const formattedBooks = books.map((book) => formatBookData(book));
  return formattedBooks;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getBooks);


/***/ }),

/***/ "./src/modules/getLikes.js":
/*!*********************************!*\
  !*** ./src/modules/getLikes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLikes: () => (/* binding */ getLikes),
/* harmony export */   getLikesAfterPost: () => (/* binding */ getLikesAfterPost)
/* harmony export */ });
/* harmony import */ var _url_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url.js */ "./src/modules/url.js");


const getLikes = async () => {
  const response = await fetch(_url_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
  if (!response.ok) {
    throw new Error('Failed to fetch Likes data');
  }
  const res = await response.json();
  return res;
};

const getLikesAfterPost = async () => {
  const response = await fetch(_url_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
  if (!response.ok) {
    throw new Error('Failed to fetch Likes data');
  }
  const res = await response.json();
  return res;
};




/***/ }),

/***/ "./src/modules/postLikes.js":
/*!**********************************!*\
  !*** ./src/modules/postLikes.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _url_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url.js */ "./src/modules/url.js");


const postLikes = async (id) => {
  try {
    await fetch(_url_js__WEBPACK_IMPORTED_MODULE_0__["default"], {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: id.toString(),
      }),
    });
  } catch (error) {
    throw new Error('Failed to post Likes data');
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postLikes);


/***/ }),

/***/ "./src/modules/url.js":
/*!****************************!*\
  !*** ./src/modules/url.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const CAPSTONE_API_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CJBclXhG3xsVEAuyngVA/likes';

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CAPSTONE_API_URL);


/***/ }),

/***/ "./src/modules/view.js":
/*!*****************************!*\
  !*** ./src/modules/view.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getBooks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBooks.js */ "./src/modules/getBooks.js");
/* harmony import */ var _getLikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getLikes.js */ "./src/modules/getLikes.js");
/* harmony import */ var _postLikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./postLikes.js */ "./src/modules/postLikes.js");
/* harmony import */ var _bookCount_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bookCount.js */ "./src/modules/bookCount.js");





const bookGrid = document.querySelector('.book-grid');
bookGrid.innerHTML = '';

const display = async () => {
  try {
    const books = await (0,_getBooks_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_bookCount_js__WEBPACK_IMPORTED_MODULE_3__["default"])(books.length);
    const getTheLikes = await (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_1__.getLikes)();
    books.forEach((book, index) => {
      const id = getTheLikes.findIndex((like) => +like.item_id === index);
      const likes = id >= 0 ? getTheLikes[id].likes : 0;

      const thumbnail = document.createElement('img');
      thumbnail.classList.add('thumbnail');
      thumbnail.src = book.coverImageUrl;

      const bookTime = document.createElement('div');
      bookTime.classList.add('book-time');
      bookTime.textContent = `Published in: ${book.publishYear}`;

      const thumbnailRow = document.createElement('div');
      thumbnailRow.classList.add('thumbnail-row');
      thumbnailRow.append(thumbnail, bookTime);

      const bookTitle = document.createElement('p');
      bookTitle.classList.add('book-title');
      bookTitle.textContent = book.title;

      const bookLike = document.createElement('p');
      bookLike.classList.add('book-like');
      bookLike.textContent = `❤ ${likes} Likes`;
      bookLike.addEventListener('click', async () => {
        if ((0,_postLikes_js__WEBPACK_IMPORTED_MODULE_2__["default"])(id)) {
          const getPostedLikes = await (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_1__.getLikesAfterPost)();
          if (getPostedLikes) {
            const updatedLikes = getPostedLikes[id].likes;
            bookLike.textContent = `❤ ${updatedLikes} Likes`;
          }
        }
      });

      const bookInfo = document.createElement('div');
      bookInfo.classList.add('book-info');
      bookInfo.append(bookTitle, bookLike);

      const bookInfoGrid = document.createElement('div');
      bookInfoGrid.classList.add('book-info-grid');
      bookInfoGrid.append(bookInfo);

      const bookPreview = document.createElement('div');
      bookPreview.classList.add('book-preview');
      bookPreview.append(thumbnailRow, bookInfoGrid);

      bookGrid.appendChild(bookPreview);
    });
  } catch (error) {
    bookGrid.innerHTML = `<p class="error-message">${error.message}</p>`;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (display);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFzQjtBQUNrQjs7QUFFeEMsNERBQU87Ozs7Ozs7Ozs7Ozs7OztBQ0hQO0FBQ0E7QUFDQSwwQkFBMEIsTUFBTTtBQUNoQzs7QUFFQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ0x6Qjs7QUFFQTtBQUNBO0FBQ0EsT0FBTyxxQkFBcUI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMERBQTBELGNBQWM7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJnQjs7QUFFeEM7QUFDQSwrQkFBK0IsK0NBQWdCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtCQUErQiwrQ0FBZ0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUV1Qzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQzs7QUFFeEM7QUFDQTtBQUNBLGdCQUFnQiwrQ0FBZ0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNsQnpCOztBQUVBLGlFQUFlLGdCQUFnQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRks7QUFDdUI7QUFDckI7QUFDQTs7QUFFdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLHdEQUFRO0FBQ2hDLElBQUkseURBQVM7QUFDYiw4QkFBOEIsc0RBQVE7QUFDdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOENBQThDLGlCQUFpQjs7QUFFL0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0NBQWtDLE9BQU87QUFDekM7QUFDQSxZQUFZLHlEQUFTO0FBQ3JCLHVDQUF1QywrREFBaUI7QUFDeEQ7QUFDQTtBQUNBLHdDQUF3QyxjQUFjO0FBQ3REO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSixxREFBcUQsY0FBYztBQUNuRTtBQUNBOztBQUVBLGlFQUFlLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2Jvb2tDb3VudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvZ2V0Qm9va3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2dldExpa2VzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9wb3N0TGlrZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3VybC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvdmlldy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgZGlzcGxheSBmcm9tICcuL21vZHVsZXMvdmlldy5qcyc7XG5cbmRpc3BsYXkoKTtcbiIsImNvbnN0IGJvb2tDb3VudCA9IChjb3VudCkgPT4ge1xuICBjb25zdCBjb3VudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jvb2stY291bnQnKTtcbiAgY291bnRlci5pbm5lckhUTUwgPSBgKCR7Y291bnR9KWA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBib29rQ291bnQ7XG4iLCJjb25zdCBPUEVOX0xJQlJBUllfQVBJX1VSTCA9ICdodHRwczovL29wZW5saWJyYXJ5Lm9yZyc7XG5cbmNvbnN0IGZldGNoU2NpZW5jZUZpY3Rpb25Cb29rcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgJHtPUEVOX0xJQlJBUllfQVBJX1VSTH0vc3ViamVjdHMvc2NpZW5jZV9maWN0aW9uLmpzb24/bGltaXQ9MThgLFxuICApO1xuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggU2NpZW5jZSBGaWN0aW9uIGJvb2tzIGRhdGEnKTtcbiAgfVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YS53b3Jrcztcbn07XG5cbmNvbnN0IGZvcm1hdEJvb2tEYXRhID0gKGJvb2spID0+IHtcbiAgY29uc3QgYm9va0RhdGEgPSB7XG4gICAgdGl0bGU6IGJvb2sudGl0bGUsXG4gICAgY292ZXJJbWFnZVVybDogYGh0dHBzOi8vY292ZXJzLm9wZW5saWJyYXJ5Lm9yZy9iL2lkLyR7Ym9vay5jb3Zlcl9pZH0tTC5qcGdgLFxuICAgIHB1Ymxpc2hZZWFyOiBib29rLmZpcnN0X3B1Ymxpc2hfeWVhcixcbiAgfTtcbiAgcmV0dXJuIGJvb2tEYXRhO1xufTtcblxuY29uc3QgZ2V0Qm9va3MgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGJvb2tzID0gYXdhaXQgZmV0Y2hTY2llbmNlRmljdGlvbkJvb2tzKCk7XG4gIGNvbnN0IGZvcm1hdHRlZEJvb2tzID0gYm9va3MubWFwKChib29rKSA9PiBmb3JtYXRCb29rRGF0YShib29rKSk7XG4gIHJldHVybiBmb3JtYXR0ZWRCb29rcztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldEJvb2tzO1xuIiwiaW1wb3J0IENBUFNUT05FX0FQSV9VUkwgZnJvbSAnLi91cmwuanMnO1xuXG5jb25zdCBnZXRMaWtlcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChDQVBTVE9ORV9BUElfVVJMKTtcbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGZldGNoIExpa2VzIGRhdGEnKTtcbiAgfVxuICBjb25zdCByZXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiByZXM7XG59O1xuXG5jb25zdCBnZXRMaWtlc0FmdGVyUG9zdCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChDQVBTVE9ORV9BUElfVVJMKTtcbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGZldGNoIExpa2VzIGRhdGEnKTtcbiAgfVxuICBjb25zdCByZXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiByZXM7XG59O1xuXG5leHBvcnQgeyBnZXRMaWtlcywgZ2V0TGlrZXNBZnRlclBvc3QgfTtcbiIsImltcG9ydCBDQVBTVE9ORV9BUElfVVJMIGZyb20gJy4vdXJsLmpzJztcblxuY29uc3QgcG9zdExpa2VzID0gYXN5bmMgKGlkKSA9PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgZmV0Y2goQ0FQU1RPTkVfQVBJX1VSTCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBpdGVtX2lkOiBpZC50b1N0cmluZygpLFxuICAgICAgfSksXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gcG9zdCBMaWtlcyBkYXRhJyk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBvc3RMaWtlcztcbiIsImNvbnN0IENBUFNUT05FX0FQSV9VUkwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvQ0pCY2xYaEczeHNWRUF1eW5nVkEvbGlrZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBDQVBTVE9ORV9BUElfVVJMO1xuIiwiaW1wb3J0IGdldEJvb2tzIGZyb20gJy4vZ2V0Qm9va3MuanMnO1xuaW1wb3J0IHsgZ2V0TGlrZXMsIGdldExpa2VzQWZ0ZXJQb3N0IH0gZnJvbSAnLi9nZXRMaWtlcy5qcyc7XG5pbXBvcnQgcG9zdExpa2VzIGZyb20gJy4vcG9zdExpa2VzLmpzJztcbmltcG9ydCBib29rQ291bnQgZnJvbSAnLi9ib29rQ291bnQuanMnO1xuXG5jb25zdCBib29rR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib29rLWdyaWQnKTtcbmJvb2tHcmlkLmlubmVySFRNTCA9ICcnO1xuXG5jb25zdCBkaXNwbGF5ID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGJvb2tzID0gYXdhaXQgZ2V0Qm9va3MoKTtcbiAgICBib29rQ291bnQoYm9va3MubGVuZ3RoKTtcbiAgICBjb25zdCBnZXRUaGVMaWtlcyA9IGF3YWl0IGdldExpa2VzKCk7XG4gICAgYm9va3MuZm9yRWFjaCgoYm9vaywgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGlkID0gZ2V0VGhlTGlrZXMuZmluZEluZGV4KChsaWtlKSA9PiArbGlrZS5pdGVtX2lkID09PSBpbmRleCk7XG4gICAgICBjb25zdCBsaWtlcyA9IGlkID49IDAgPyBnZXRUaGVMaWtlc1tpZF0ubGlrZXMgOiAwO1xuXG4gICAgICBjb25zdCB0aHVtYm5haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgIHRodW1ibmFpbC5jbGFzc0xpc3QuYWRkKCd0aHVtYm5haWwnKTtcbiAgICAgIHRodW1ibmFpbC5zcmMgPSBib29rLmNvdmVySW1hZ2VVcmw7XG5cbiAgICAgIGNvbnN0IGJvb2tUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBib29rVGltZS5jbGFzc0xpc3QuYWRkKCdib29rLXRpbWUnKTtcbiAgICAgIGJvb2tUaW1lLnRleHRDb250ZW50ID0gYFB1Ymxpc2hlZCBpbjogJHtib29rLnB1Ymxpc2hZZWFyfWA7XG5cbiAgICAgIGNvbnN0IHRodW1ibmFpbFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGh1bWJuYWlsUm93LmNsYXNzTGlzdC5hZGQoJ3RodW1ibmFpbC1yb3cnKTtcbiAgICAgIHRodW1ibmFpbFJvdy5hcHBlbmQodGh1bWJuYWlsLCBib29rVGltZSk7XG5cbiAgICAgIGNvbnN0IGJvb2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIGJvb2tUaXRsZS5jbGFzc0xpc3QuYWRkKCdib29rLXRpdGxlJyk7XG4gICAgICBib29rVGl0bGUudGV4dENvbnRlbnQgPSBib29rLnRpdGxlO1xuXG4gICAgICBjb25zdCBib29rTGlrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIGJvb2tMaWtlLmNsYXNzTGlzdC5hZGQoJ2Jvb2stbGlrZScpO1xuICAgICAgYm9va0xpa2UudGV4dENvbnRlbnQgPSBg4p2kICR7bGlrZXN9IExpa2VzYDtcbiAgICAgIGJvb2tMaWtlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgICBpZiAocG9zdExpa2VzKGlkKSkge1xuICAgICAgICAgIGNvbnN0IGdldFBvc3RlZExpa2VzID0gYXdhaXQgZ2V0TGlrZXNBZnRlclBvc3QoKTtcbiAgICAgICAgICBpZiAoZ2V0UG9zdGVkTGlrZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRMaWtlcyA9IGdldFBvc3RlZExpa2VzW2lkXS5saWtlcztcbiAgICAgICAgICAgIGJvb2tMaWtlLnRleHRDb250ZW50ID0gYOKdpCAke3VwZGF0ZWRMaWtlc30gTGlrZXNgO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGJvb2tJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBib29rSW5mby5jbGFzc0xpc3QuYWRkKCdib29rLWluZm8nKTtcbiAgICAgIGJvb2tJbmZvLmFwcGVuZChib29rVGl0bGUsIGJvb2tMaWtlKTtcblxuICAgICAgY29uc3QgYm9va0luZm9HcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBib29rSW5mb0dyaWQuY2xhc3NMaXN0LmFkZCgnYm9vay1pbmZvLWdyaWQnKTtcbiAgICAgIGJvb2tJbmZvR3JpZC5hcHBlbmQoYm9va0luZm8pO1xuXG4gICAgICBjb25zdCBib29rUHJldmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgYm9va1ByZXZpZXcuY2xhc3NMaXN0LmFkZCgnYm9vay1wcmV2aWV3Jyk7XG4gICAgICBib29rUHJldmlldy5hcHBlbmQodGh1bWJuYWlsUm93LCBib29rSW5mb0dyaWQpO1xuXG4gICAgICBib29rR3JpZC5hcHBlbmRDaGlsZChib29rUHJldmlldyk7XG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgYm9va0dyaWQuaW5uZXJIVE1MID0gYDxwIGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiPiR7ZXJyb3IubWVzc2FnZX08L3A+YDtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==