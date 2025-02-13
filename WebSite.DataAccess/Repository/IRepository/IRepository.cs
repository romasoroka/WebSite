﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace WebSite.DataAccess.Repository.IRepository
{
    public interface IRepository<T> where T : class
    {
        IEnumerable<T> GetAll(string? includeProp = null);
        T Get(Expression<Func<T, bool>> predicate, string? includeProp = null); 
        void Add(T entity);
        void Remove(T entity);
        void RemoveRange(IEnumerable<T> entities);

    }
}
