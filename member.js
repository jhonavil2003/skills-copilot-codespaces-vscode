function skillsMember(){
  var member = {
    skills: ['JavaScript', 'React', 'Node'],
    getSkills: function(){
      return this.skills;
    }
  }
  return member.getSkills();
}