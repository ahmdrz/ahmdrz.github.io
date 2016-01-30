<script language="javascript">
function DisplayVisits()
{
    var numVisits = GetCookie("numVisits");
    if (numVisits) numVisits = parseInt(numVisits) + 1;
    else numVisits = 1;
    if (numVisits==1) document.write("This is your first visit.");
    else document.write("You have visited this page " + numVisits + " times.");
    var today = new Date();
    today.setTime(today.getTime() + 365 * 24 * 60 * 60 * 1000);
    SetCookie("numVisits", numVisits, today);
}
</script>
