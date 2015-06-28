/**
 * Setup a tracker autorun for the title, formatted like "{title} {seperator} {suffix}".
 */
Tracker.autorun(function() {
  var t = Atomic.getTitle();
  document.title = (t.length > 0 ? ( t + " " + Atomic.seperator + " " + Atomic.suffix) : Atomic.suffix);
});
