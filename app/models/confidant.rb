class Confidant < ApplicationRecord
    attr_reader :password

    validates :username, :password_digest, :email, :session_token, prescence: true
    validates :username, :email, :session_token, uniqueness: true
    validates :password, length: {minimum: 7}, allow_nil: true

    after_initialize :ensure_session_token

    belongs_to :conurbation,
        foreign_key: :location_id

    def self.find_by_credentials(username, password)
        confidant = Confidant.find_by(username: username)
        confidant && confidant.is_password?(password) ? confidant : nil
    end

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
        @password = password
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end
end
