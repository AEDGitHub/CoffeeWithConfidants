class Confab < ApplicationRecord
    validates :host_id, :description, :max_capacity, :start_time, :end_time, presence: true
    validates :host_id, uniqueness: {scope: :start_time}

    belongs_to :host,
        primary_key: :id,
        foreign_key: :host_id,
        class_name: :Confidant

    has_one :conurbation,
        through: :host

    has_many :conflations,
        foreign_key: :confab_id

        ##!! and here
    has_many :attendees,
        through: :conflations,
        class_name: :Confidant        
    ##!! to here

end
