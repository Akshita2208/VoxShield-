"use client"

import React, { useState } from "react"
import { Users, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TrustedContactCard } from "./trusted-contact-card"
import { AddContactModal } from "./add-contact-modal"

interface Contact {
  id: string
  name: string
  relationship: string
}

export function TrustedContacts() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleAddContact = (name: string, relationship: string) => {
    const newContact = {
      id: Math.random().toString(36).substring(7),
      name,
      relationship
    }
    setContacts((prev) => [...prev, newContact])
  }

  const handleRemoveContact = (id: string) => {
    setContacts((prev) => prev.filter(c => c.id !== id))
  }

  return (
    <div className="max-w-4xl mx-auto mb-12">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
        <div>
          <h3 className="text-xl font-bold text-foreground">Trusted Contacts</h3>
          <p className="text-sm text-muted mt-1">
            Optional identities that VoxShield can use as trusted speaker references during protected calls.
          </p>
        </div>
        <Button variant="primary" onClick={() => setIsModalOpen(true)} className="shrink-0">
          <Plus className="h-4 w-4 mr-2" />
          Add Trusted Contact
        </Button>
      </div>

      {contacts.length === 0 ? (
        <div className="bg-surface border border-dashed border-border/50 rounded-xl p-12 flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 rounded-full bg-surface-elevated flex items-center justify-center mb-4">
            <Users className="h-8 w-8 text-muted" />
          </div>
          <h4 className="text-lg font-bold text-foreground mb-2">No trusted identities yet</h4>
          <p className="text-sm text-muted max-w-sm mb-6">
            Add trusted identities if you want to verify specific callers.
          </p>
          <Button variant="outline" onClick={() => setIsModalOpen(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add Trusted Contact
          </Button>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {contacts.map((contact) => (
            <TrustedContactCard
              key={contact.id}
              id={contact.id}
              name={contact.name}
              relationship={contact.relationship}
              onRemove={handleRemoveContact}
            />
          ))}
        </div>
      )}

      <AddContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onAdd={handleAddContact} 
      />
    </div>
  )
}
