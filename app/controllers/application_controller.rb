class ApplicationController < ActionController::Base
    # protect_from_forgery with: :exception #taken out for testing purposes

    helper_method :current_confidant, :logged_in?

    private

    def current_confidant
        @current_confidant ||= Confidant.find_by(session_token: session[:session_token]) 
    end

    def require_login
        redirect_to new_session_url unless logged_in? 
        #I anticipate this will have to change to accomodate API namespace, ask Lina!
    end

    def login(confidant)
        session[:session_token] = confidant.reset_session_token!
    end

    def logout
        current_confidant.reset_session_token! if logged_in?
        session[:session_token] = nil
        @current_confidant = nil
    end

    def logged_in?
        !!current_confidant
    end

end
