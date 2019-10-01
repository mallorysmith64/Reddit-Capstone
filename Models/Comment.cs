using System;
using Reddit_Capstone.Models;

namespace StackOverFlow.Models
{
  public class Comment
  {
    //comments table
    public int ID { get; set; }
    public int UpVote { get; set; }
    public int DownVote { get; set; }
    public string PostedBy { get; set; }
    public DateTime TimePassed { get; set; } = DateTime.Now;
    public string Content { get; set; }
    public int? PostID { get; set; }
    public Post Post { get; set; }
    //connect comment table to user table
    public User User { get; set; }
  }
}