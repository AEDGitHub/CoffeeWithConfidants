class Conflation < ApplicationRecord
    validates :confab_id, :attendee_id, presence: true
    validates :attendee_id, uniqueness: {scope: :confab_id}

    belongs_to :confab,
        foreign_key: :confab_id

    belongs_to :attendee,
        foreign_key: :attendee_id,
        class_name: :Confidant

end
