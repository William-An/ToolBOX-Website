<form onsubmit="starttimer(this);return false" onreset="stoptimer(this);document.getElementsByTagName('audio')[0].muted=true;" time=25 style="display:''">
    <!--// 25 min counterdown + title
    // Unable to load js about DOM is loaded
    // Use form submit to call function
    // ding~ end sound-->
    <div class="row uniform">
        <div class="12u$">
            <input style="text-align:center" type="text" name="Task" placeholder="Task Title" value="Untitle Task" />
        </div>
        <div class="12u$">
            <input style="text-align:center" type="text" name="Time" placeholder="Time(min)" value=25 />
        </div>
        <div class="12u$">
    	    <ul class="actions">
    		    <li><input type="submit" value="Start" class="special"></li>
    			<li><input type="reset" value="Reset"></li>
    		</ul>
    	</div>
	</div>
</for