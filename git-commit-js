
(function () {
    /**
     * Commit class
     * Represents a single commit.
     *
     * @param {number} id    Commit ID
     * @param {Commit} parent Parent commit
     * @param {string} message Commit message
     */
    function Commit(id, parent, message) {
      this.id = id;
      this.parent = parent;
      this.message = message;
    }
  
    /**
     * Git class
     * Represents a Git repository.
     *
     * @param {string} name Repository name
     */
    function Git(name) {
      this.name = name;
      this.lastCommitId = -1; // Keep track of last commit id
      this.HEAD = null; // Points to last commit
    }
  
    /**
     * Make a commit
     * @param {string} message Commit message
     * @returns {Commit} Created commit
     */
    Git.prototype.commit = function(message) {
      var commit = new Commit(++this.lastCommitId, this.HEAD, message);
      this.HEAD = commit;
      return commit;
    };
  
    /**
     * Log commits in reverse chronological order
     * @returns {Array} Array of commits
     */
    Git.prototype.log = function() {
      var commit = this.HEAD;
      var history = [];
      while (commit) {
        history.push(commit);
        commit = commit.parent;
      }
      return history;
    };
  
    // Expose Git globally
    window.Git = Git;
  })();