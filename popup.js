// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Get the current URL.
 *
 * @param {function(string)} callback - called when the URL of the current tab
 *   is found.
 */
function popOut() {
    chrome.tabs.executeScript({
        file: 'background.js'
    });
}

document.getElementById('clickme').addEventListener('click', popOut);



