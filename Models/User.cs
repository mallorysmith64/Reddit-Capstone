using System;
using System.Collections.Generic;
using RedditCapstone.Models;

namespace Reddit_Capstone.Models
{
  //table for user to post and comment
  public class User
  {
    public int ID { get; set; }
    public string Email { get; set; }
    public string UserName { get; set; }
    public string HashedPassword { get; set; }
    public DateTime DateSignedUp { get; set; }
    public DateTime LastLoggedIn { get; set; }
    public List<Post> Posts { get; set; } = new List<Post>();
    public List<Comment> Comments { get; set; } = new List<Comment>();
  }
}