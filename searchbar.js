let keywords = [
    'Library',
    'Classroom',
    'Mac Lab',
    'Windows Lab',
    'Duo OS Lab',
    'Self Study Room',
    'Innovation Hub',
    'Gym',
    'Reception',
    'Security',
    'Design Studio',
    'Collaboration Study Space',
    'Teacher & Research',
    'T&H Management Classroom',
    'SAS',
    'Financial Trading Lab',
    'Canteen',
    'AV Theatre',
    'Student Connect',
    'Wellbeing',
    'International Office',
  ];
  
  const resultsBox = document.querySelector(".result-box");
  const inputBox = document.getElementById("input-box");
  
  inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
      result = keywords.filter((keyword)=>{
        return keyword.toLowerCase().includes(input.toLowerCase());
      });
    }
    display(result);
  
    if(!result.length){
      resultsBox.innerHTML = '';
    }
  }
  
  function display(result){
    const content = result.map((list)=>{
      return "<li>" + list + "</li>";
    });
  
    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
  }
  
  //when user clicks on the ul, it will href to the corresponding page
  // Create a mapping of list item text content to URLs
  var urlMapping = {
    'Library': 'library.html',
    'Classroom': 'room_detail.html',
    'Mac Lab': 'mac-lab.html',
    'Windows Lab': 'windows-lab.html',
    'Duo OS Lab': 'duo-os-lab.html',
    'Self Study Room': 'self-study-room.html',
    'Innovation Hub': 'innovation-hub.html',
    'Gym': 'gym.html',
    'Reception': 'reception.html',
    'Security': 'security.html',
    'Design Studio': 'design-studio.html',
    'Collaboration Study Space': 'student_space_detail.html',
    'Teacher & Research': 'teacher-research.html',
    'T&H Management Classroom': 'th-management-classroom.html',
    'SAS': 'sas_detail.html',
    'Financial Trading Lab': 'financial_detail.html',
    'Canteen': 'canteen.html',
    'AV Theatre': 'av_theatre_detail.html',
    'Student Connect': 'student_connect.html',
    'Wellbeing': 'wellbeing_details.html',
    'International Office': 'sos_office_detail.html',
  };
  
  resultsBox.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
      // Use the text content of the clicked list item to get the corresponding URL from the mapping
      var url = urlMapping[e.target.textContent];
      if(url){
        window.location.href = url;
      }
      resultsBox.innerHTML = '';
    }
  })
  
  