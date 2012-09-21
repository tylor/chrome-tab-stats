/* Resources
  - http://code.google.com/chrome/extensions/windows.html#method-getAll
  - http://code.google.com/chrome/extensions/tabs.html#method-getAllInWindow
  - http://code.google.com/chrome/extensions/background_pages.html
  - http://people.iola.dk/olau/flot/examples/
  - http://flot.googlecode.com/svn/trunk/API.txt
*/
$(document).ready(function() {
  $('#total').html(chrome.extension.getBackgroundPage().totalCreated - chrome.extension.getBackgroundPage().totalRemoved);
  $('#opened').html(chrome.extension.getBackgroundPage().totalCreated);
  $('#closed').html(chrome.extension.getBackgroundPage().totalRemoved);
  // Add current time to data.
  time = new Date()
  currentTime = time.getTime() - (time.getTimezoneOffset() * 60 * 1000);
  d = (chrome.extension.getBackgroundPage().timedTabs).concat([[currentTime, chrome.extension.getBackgroundPage().totalCreated - chrome.extension.getBackgroundPage().totalRemoved]]);
  //d = chrome.extension.getBackgroundPage().timedTabs;
  $.plot($("#graph"), [{data: d, lines: {show: true, steps: true}}], { xaxis: { mode: "time", twelveHourClock: true }, yaxis: {tickDecimals: 0} });
});
