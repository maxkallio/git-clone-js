(function() {
    function Branch(name, commit) {
      this.name = name;
      this.commit = commit;
    }
  
    function Git(name) {
      this.name = name;
      this.lastCommitId = -1;
      this.branches = [];
      var master = new Branch("master", null);
      this.branches.push(master);
      this.HEAD = master;
    }
  
    function Commit(id, parent, message) {
      this.id = id;
      this.parent = parent;
      this.message = message;
    }
  
    Git.prototype.commit = function(message) {
      var commit = new Commit(++this.lastCommitId, this.HEAD.commit, message);
      this.HEAD.commit = commit;
      return commit;
    };
  
    Git.prototype.log = function() {
      var commit = this.HEAD.commit;
      var history = [];
      while (commit) {
        history.push(commit);
        commit = commit.parent;
      }
      return history;
    };
  
    window.Git = Git;
  })();