using System;
using Reddit_Capstone.Models;

namespace RedditCapstone.Models
{
  public class Comment
  {
    //comments table
    public int ID { get; set; }
    public int UpVote { get; set; }
    //1 store upvotes and down votes as a single number
    //2 on the front end increment then send changed value back
    public int DownVote { get; set; }
    //remove downvotes
    public string PostedBy { get; set; }
    public DateTime TimePassed { get; set; } = DateTime.Now;
    public string Comments { get; set; }
    public int? PostID { get; set; }
    public Post Post { get; set; }
    //connect comment table to user table
    public User User { get; set; }
  }
}