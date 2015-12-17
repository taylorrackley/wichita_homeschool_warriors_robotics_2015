var info = new Array(
"Our team is split into two main categories, the Robot side, and the BEST award side. Each side has its own tasks and challenges. Hudson our team leader has to know how each side is doing and make sure the team operates correctly.",
    
"The Robot side deals with the construction, wiring, and programming of the robot for the competition. The Robot leader makes sure that all the parts of the robot are built and connected.",
    
"The BEST side works on various tasks, primarily related to documenting the progress of our team through the past six weeks. The BEST side will also market our team throughout the year displaying our robot at various engineering events.",

"The wheel team has to test various sizes of wheels and find which one will best fit our robot. They also create hubs for the wheels for easy attachment to the motors.",
        
"The booth team builds and decorates an exhibit to display information about both BEST and our team at game day. The booth team does their best to match the theme of the game.",
    
"The CAD team will build 3D models of the robot that is built by the team over the course of the season. They will also take pictures of the 3D models that will appear in the notebook for documentation.",
    
"The chassis team builds the body of the robot. The components of the robot, such as the wheels, arm, and vex, attach to the chassis.",
          
"The claw team will brainstorm and test various ideas to find the best possible claw.  This year the claw team made a pincher style claw that used a servo to function.",
    
"The electronics team wires and programs the robot so that we can control it on the game field. This year the electronics team used a program called Simulink which enabled us virtually test our algorithms.",
    
"The notebook team journals about what the team has done during the season such as progress on the robot and booth. They will also include various tests the robot has gone through as well as game strategies",  
    
"The spirit team prepares for game day by making signs that will be displayed on game day. They also lead the majority of our team in the stands in cheers to encourage our robot drivers.",    

"The tool team designs and builds miscellaneous components for the robot. For example this year the tool team built a scoop to attach to the robot.",
    
"Early during the season the various team members will submit T-shirt designs and vote on them. Once one is selected, the T-shirt team will make a digital image of a design and submit it to be printed on the team shirts.", 

"The webpage team builds a new website each year from the ground up which will contain information about our team as well as links to our social media pages.",
    
"The arm team will brainstorm arm ideas until they have built an arm that suits our needs. During brainstorming they must figure out a system of raising and lowering game pieces which requires a lot of torque."
);

function team(name, team, id) {
    var popup = document.createElement('div');
    popup.innerHTML = '<div id="popup_container"><div id="profile_left"><img id="profile_img" src="../img/team_leaders/'+id+'.png"/><p id="profile_name">'+name+'</p><p id="profile_leader">'+team+'</p></div><div id="profile_right"><p id="profile_text">'+info[(id - 1)]+'</p></div></div>';
    popup.setAttribute('id', 'popup');
    popup.onclick = function(){ closePopup() };
    document.body.appendChild(popup);
}

function closePopup() {
    var popup = document.getElementById("popup");
    popup.parentNode.removeChild(popup);
}