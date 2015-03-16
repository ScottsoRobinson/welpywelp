class User < ActiveRecord::Base
  validates :username, :password_digest, :email, :session_token, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}
  validates :username, :session_token, uniqueness: true
  validates :password, confirmation: true
  validates :password_confirmation, presence: true, on: :create

  after_initialize :ensure_session_token

  has_attached_file :picture, default_url: ""
  validates_attachment_content_type :picture, :content_type => /\Aimage\/.*\z/

  has_many(
    :restaurants,
    class_name: "Restaurant",
    foreign_key: :owner_id,
    primary_key: :id
  )

  has_many(
    :reviews,
    class_name: "Review",
    foreign_key: :author_id,
    primary_key: :id
  )

  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return nil if user.nil?
    user.is_password?(password) ? user: nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end



  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password);
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end


  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
