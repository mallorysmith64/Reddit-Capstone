using System;
using System.Collections.Generic;
using Reddit_Capstone.Models;

namespace RedditCapstone.Models
{
  //table for post
  public class Post
  {
    public int ID { get; set; }
    public int UpVote { get; set; }
    public int DownVote { get; set; }
    public string PostedBy { get; set; }
    public string Title { get; set; }
    public string Content { get; set; }
    public DateTime TimePassed { get; set; } = DateTime.Now;
    //connect post table to comments: one to many relationship
    public List<Comment> Comments { get; set; } = new List<Comment>();
    //connect post table to user table
    public User User { get; set; }
  }
}