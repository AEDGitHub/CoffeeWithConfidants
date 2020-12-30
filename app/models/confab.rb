class Confab < ApplicationRecord
  validates :host_id,
            :description,
            :max_capacity,
            :start_time_in_ms,
            :end_time_in_ms,
            presence: true
  validates :host_id, uniqueness: { scope: :start_time_in_ms }

  belongs_to :host,
             primary_key: :id,
             foreign_key: :host_id,
             class_name: :Confidant

  has_one :conurbation, through: :host, class_name: :Conurbation

  has_many :conflations, foreign_key: :confab_id

  has_many :attendees, through: :conflations, class_name: :Confidant
end
