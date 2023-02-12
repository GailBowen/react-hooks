import React from 'react'

export default function ItemList({ items }) {
  return (
    <div>
       {items.map(p => (
            <div key={p}>{p}</div>
       ))}
    </div>
  )
}
