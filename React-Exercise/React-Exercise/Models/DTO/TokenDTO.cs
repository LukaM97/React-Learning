﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace React_Exercise.Models.DTO
{
    public class TokenDTO
    {
        public string Username { get; set; }
        public string Token { get; set; }
        public DateTime Expiration { get; set; }
    }
}
