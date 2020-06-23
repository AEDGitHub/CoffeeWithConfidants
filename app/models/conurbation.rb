class Conurbation < ApplicationRecord

    validates :name, unique: true, prescence: true

    has_many :confidants
        foreign_key: :location_id

end
